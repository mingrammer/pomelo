	- json 파일에는 주석을 못다는 관계로 config 폴더내 json 파일에 대한 정리는 여기에 하도록한다.

1. servers.json
	A. development 일지 production 일지 선택하는건 게임서버 구동시(pomelo start ~~~) production 파라미터를 주느냐 마느냐로 결정(default 는 development)
	B. id는 게임서버의 id
	C. host 는 게임서버의 ip
	D. port 는 게임서버의 포트
	E. clientHost 는 클라이언트에서 요청을 받는 프론트 엔드 서버의 ip
	F. clientPort 는 클라이언트에서 요청을 받는 프론트 엔드 서버의 port
		* clientHost/host, clientPort/port 가 나뉘어져있는건 프론트엔드서버 - 클라이언트 통신, 프론트엔드 - 백엔드 서버간의 통신을 위한듯...
		* clientHost, clientPort 가 없을경우 default 는 host, port 의 값이 되는가?
	G. frontend 는 프론트 엔드 서버인지 유무(boolean)
