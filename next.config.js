module.exports = {
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: securityHeaders
          }
        ];
      }
}