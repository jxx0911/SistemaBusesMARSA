import React from "react";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import {
	IoBusSharp,
	IoTicket,
	IoSettings,
	IoLogOut,
	IoBusinessSharp,
} from "react-icons/io5";
import { FaHistory } from "react-icons/fa";

export const SidebarData = [
	{
		title: "Home",
		path: "/home",
		icon: <AiIcons.AiFillHome />,
		cName: "nav-text",
	},
	{
		title: "Ticket",
		path: "/ticket",
		icon: <IoTicket />,
		cName: "nav-text",
	},
	{
		title: "Tablas",
		path: "/tabla",
		icon: <ImIcons.ImTable />,
		cName: "nav-text",
	},
	{
		title: "Historial",
		path: "/historial",
		icon: <FaHistory />,
		cName: "nav-text",
	},
	{
		title: "Bus",
		path: "/buses",
		icon: <IoBusSharp />,
		cName: "nav-text",
	},
	{
		title: "Empresa",
		path: "/empresas",
		icon: <IoBusinessSharp />,
		cName: "nav-text",
	},
	{
		title: "Manifiesto",
		path: "/manifiesto",
		icon: <ImIcons.ImPrinter />,
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
		path: "/",
		icon: <IoLogOut />,
		cName: "nav-text",
	},
];
