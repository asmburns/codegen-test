FROM registry.access.redhat.com/rhscl/nginx-112-rhel7:1-52.1568364438
USER root
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY build html
CMD nginx
