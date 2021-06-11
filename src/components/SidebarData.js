import React from "react";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import { IoBusSharp,IoTicket, IoSettings, IoLogOut } from "react-icons/io5";

export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <AiIcons.AiFillHome />,
		cName: "nav-text",
	},
	{
		title: "Tablas",
		path: "/tabla",
		icon: <ImIcons.ImTable />,
		cName: "nav-text",
	},
	{
		title: "Bus",
		path: "/registro-buses",
		icon: <IoBusSharp />,
		cName: "nav-text",
	},
	{
		title: "Ticket",
		path: "/ticket",
		icon: <IoTicket />,
		cName: "nav-text",
	},
	{
		title: "Configuracion",
		path: "/config",
		icon: <IoSettings />,
		cName: "nav-text",
	},
	{
		title: "Salir",
		path: "/support",
		icon: <IoLogOut />,
		cName: "nav-text",
	},
];
