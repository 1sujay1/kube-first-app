Start with these commands:

npm init -y
npm i express

create Dockerfile,app.js,.ignore,.dockerignore

create a simple server using express
Build a simple node-alpine image

kubectl create deployment first-app --image=sujaygowdag333/kube-first-app
kubectl get deployments
kubectl get pods
kubectl get services
kubectl delete deployment first-app
kubectl expose deployment first-app --type=LoadBalancer --port=8080

minikube service first-app : To get ip address of remote machine
minikube tunnel

To Scale :
kubectl scale deployment/first-app --replicas=3

To Update Image
kubectl set image deployment/first-app kube-first-app=sujaygowdag333/kube-first-app

To get deployed status
kubectl rollout status deployment/first-app

To Undo the updated image
kubectl rollout undo deployment/first-app

To Get deployment history
kubectl rollout history deployment/first-app

To Get deployment details
kubectl rollout history deployment/first-app --revision 2

To Go to Particular deployed revision
kubectl rollout undo deployment/first-app --to-revision=5

---

To Run using Yaml file
kubectl apply -f=deployment.yaml
