FROM bitnami/kubectl:latest

COPY ./delete-expired-namespaces /delete-expired-namespaces

ENTRYPOINT ["bash"]

CMD ["-c", "'/delete-expired-namespaces'"]