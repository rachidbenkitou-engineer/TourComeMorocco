#!/usr/bin/env sh
# First HTTPS certificate for marrakech-abdelah.com (run once on the server, from the project folder).
# Needs: DNS A records of marrakech-abdelah.com and www → this server, and port 80 free.
set -e
# Optional e-mail for Let's Encrypt expiry notices: scripts/init-ssl.sh you@example.com
cd "$(dirname "$0")/.."

if [ -f certbot/conf/live/marrakech-abdelah.com/fullchain.pem ]; then
  echo "Certificate already present — nothing to do."; exit 0
fi

if [ -n "$1" ]; then CONTACT="-m $1"; else CONTACT="--register-unsafely-without-email"; fi
mkdir -p certbot/conf certbot/www
docker compose stop nginx 2>/dev/null || true
docker run --rm -p 80:80 -v "$PWD/certbot/conf:/etc/letsencrypt" -v "$PWD/certbot/www:/var/www/certbot" \
  certbot/certbot certonly --standalone --non-interactive --agree-tos $CONTACT \
  -d marrakech-abdelah.com -d www.marrakech-abdelah.com
echo "Certificate OK. Now: docker compose up -d --build"
