import {Socket} from "socket.io";

interface ISocketEvent {
    name: string;
    function: (socket: Socket) => (...args: any[]) => void
}

export default ISocketEvent;
