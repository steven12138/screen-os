<?php
include_once('./connect.php');
include_once('./safety.php');
class Jwt
{
    private static array $header = array(
        'alg' => 'HS256',
        'typ' => 'JWT'
    );
    private static string $key = '1MClMD|tphq8g,U|';
    private static function base64UrlEncode($input)
    {
        return str_replace('=', '', strtr(base64_encode($input), '+/', '-_'));
    }
    private static function base64UrlDecode($input)
    {
        $rem = strlen($input) % 4;
        if ($rem) {
            $addlen = 4 - $rem;
            $input .= str_repeat('=', $addlen);
        }
        return base64_decode(strtr($input, '-_', '+/'));
    }
    private static function signature($input, $key, $alg = 'HS256')
    {
        $alg_config = array('HS256' => 'sha256');
        return self::base64UrlEncode(hash_hmac($alg_config[$alg], $input, $key, true));
    }
    public static function getToken($payload)
    { //获取jwt token
        $sid = checkValue($payload["sid"]);
        $arr = array(
            'iss' => 'BDFZSubIT',
            'iat' => time(),
            'exp' => time() + 3600 * 2,
            'nbf' => time(),
            'jti' => md5(uniqid('JWT') . time()),
        );
        $payload = array_merge($arr, $payload);
        if (is_array($payload)) {
            $base64header = self::base64UrlEncode(json_encode(self::$header));
            $base64payload = self::base64UrlEncode(json_encode($payload));
            $token = $base64header . '.' . $base64payload . '.' . self::signature($base64header . '.' . $base64payload, self::$key, self::$header['alg']);
            return $token;
        } else {
            return false;
        }
    }

    public static function verifyToken($Token)
    { //检验jwt是否合法
        $tokens = explode('.', $Token);
        if (count($tokens) != 3)
            return false;
        list($base64header, $base64payload, $sign) = $tokens;

        $base64decodeHeader = json_decode(self::base64UrlDecode($base64header), JSON_OBJECT_AS_ARRAY);
        if (empty($base64decodeHeader['alg']))
            return false;
        if (self::signature($base64header . '.' . $base64payload, self::$key, $base64decodeHeader['alg']) !== $sign)
            return false;
        $payload = json_decode(self::base64UrlDecode($base64payload), JSON_OBJECT_AS_ARRAY);
        if (isset($payload['iat']) && $payload['iat'] > time())
            return false;
        if (isset($payload['exp']) && $payload['exp'] < time())
            return false;
        if (isset($payload['nbf']) && $payload['nbf'] > time())
            return false;
        return $payload;
    }
}
//Written By XBY