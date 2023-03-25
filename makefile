create:
	docker build . -t test_task_image
delete:
	docker rmi test_task_image
run:
	docker run -d -p 8080:8080 --rm --name test_task_container test_task_image
stop:
	docker stop test_task_container