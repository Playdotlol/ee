self.__uv$config = {
    prefix: '/static/l2x/isbetter/',
    bare:'https://loungef2x.koyeb.app/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://playdotlol.github.io/ee/static/uv/uv.handler.js',
    bundle: 'https://playdotlol.github.io/ee/static/uv/uv.bundle.js',
    config: 'https://playdotlol.github.io/ee/static/uv/uv.config.js',
    sw: 'https://playdotlol.github.io/ee/static/uv/uv.sw.js',
};
