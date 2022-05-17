import http from 'http';
import io from 'socket.io';
import ISocketEvent from '../http/socket/ISocketEvent';

export default class SocketService {
    private socket!: io.Socket | null;
    private readonly httpServer!: http.Server;
    private socketServer!: io.Server;
    private eventListeners!: ISocketEvent[];

    constructor(server: http.Server, customEvents: ISocketEvent[] = []) {
        console.log('[SocketIO Service]: Configuring SocketIO Service');

        this.httpServer = server;
        this.eventListeners = customEvents;

        console.log('[SocketIO Service]: Listening to http server');

        this.createSocketServer();

        this.createEventListeners();

        console.log('[SocketIO Service]: Done');
    }

    private createSocketServer(): void {
        console.log('[SocketIO Service]: Created socket server');
        this.socketServer = new io.Server(this.httpServer, {
            cors: {
                origin: "http://localhost:3000",
                methods: ["GET", "POST", 'PUT', 'DELETE', 'PATCH', 'OPTION']
            }
        });
    }

    private createEventListeners(): void {
        this.socketServer.on('connection', (socket) => {
            console.log('[SocketIO Service]: Connected to socket');
            this.socket = socket;

            this.eventListeners.forEach((eventListener) => {
                if (this.socket) {
                    console.log('[SocketIO Service]: Listening on socket for event ' + eventListener.name);
                    this.socket.on(eventListener.name, eventListener.function(socket));
                }
            })

            socket.on('disconnect', () => {
                console.log('[SocketIO Service]: Disconnected from socket');
                this.socket = null;
            });
        });
    }

}
