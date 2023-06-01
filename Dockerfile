# Use a lightweight web server as the base image
FROM nginx:latest

# Copy web page files to the appropriate location
COPY index.html /usr/share/nginx/html
COPY index.css /usr/share/nginx/html
COPY index.js /usr/share/nginx/html

#commands
# docker build -t my-web-page:1.0 .
# docker run -d -p 80:80 my-web-page:1.0
