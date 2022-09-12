import "./sidebar.scss";
import {
	AccountCircleOutlined,
	CreditCard,
	Dashboard,
	ExitToApp,
	InsertChart,
	LocalShipping,
	Menu,
	NotificationsNone,
	PersonOutline,
	PsychologyOutlined,
	SettingsApplications,
	SettingsSystemDaydreamOutlined,
	Store,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Tooltip } from "@mui/material";

const Sidebar = () => {
	const [isOpen, setisOpen] = useState(true);
	return (
		<div className={isOpen ? "sidebar" : "sidebar collapsed"}>
			<div className="top collapsed">
				{isOpen && <span className="logo">deladmin</span>}
				<Menu className="menu" onClick={() => setisOpen(!isOpen)} />
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>

					<Tooltip title="Dashboard" placement="right-start">
						<Link to="/" style={{ textDecoration: "none" }}>
							<li>
								<Dashboard className="icon" />
								{isOpen && <span>Dashboard</span>}
							</li>
						</Link>
					</Tooltip>

					<p className="title">LISTS</p>

					<Tooltip title="Users" placement="right-start">
						<Link to="/users" style={{ textDecoration: "none" }}>
							<li>
								<PersonOutline className="icon" />
								{isOpen && <span>Users</span>}
							</li>
						</Link>
					</Tooltip>
					<Tooltip title="Products" placement="right-start">
						<Link to="/products" style={{ textDecoration: "none" }}>
							<li>
								<Store className="icon" />
								{isOpen && <span>Products</span>}
							</li>
						</Link>
					</Tooltip>
					<Tooltip title="Orders" placement="right-start">
						<li>
							<CreditCard className="icon" />
							{isOpen && <span>Orders</span>}
						</li>
					</Tooltip>
					<Tooltip title="Delivery" placement="right-start">
						<li>
							<LocalShipping className="icon" />
							{isOpen && <span>Delivery</span>}
						</li>
					</Tooltip>

					<p className="title">USEFUL</p>

					<Tooltip title="Stats" placement="right-start">
						<li>
							<InsertChart className="icon" />
							{isOpen && <span>Stats</span>}
						</li>
					</Tooltip>
					<Tooltip title="Notifications" placement="right-start">
						<li>
							<NotificationsNone className="icon" />
							{isOpen && <span>Notifications</span>}
						</li>
					</Tooltip>

					<p className="title">SERVICE</p>

					<Tooltip title="System Health" placement="right-start">
						<li>
							<SettingsSystemDaydreamOutlined className="icon" />
							{isOpen && <span>System Health</span>}
						</li>
					</Tooltip>
					<Tooltip title="Logs" placement="right-start">
						<li>
							<PsychologyOutlined className="icon" />
							{isOpen && <span>Logs</span>}
						</li>
					</Tooltip>
					<Tooltip title="Settings" placement="right-start">
						<li>
							<SettingsApplications className="icon" />
							{isOpen && <span>Settings</span>}
						</li>
					</Tooltip>

					<p className="title">USER</p>

					<Tooltip title="Profile" placement="right-start">
						<li>
							<AccountCircleOutlined className="icon" />
							{isOpen && <span>Profile</span>}
						</li>
					</Tooltip>

					<Tooltip title="Logout" placement="right-start">
						<li>
							<ExitToApp className="icon" />
							{isOpen && <span>Logout</span>}
						</li>
					</Tooltip>
				</ul>
			</div>
			<div className={isOpen ? "bottom" : "bottom collapsed"}>
				<div
					className="colorOption"
					//   onClick={() => dispatch({ type: "LIGHT" })}
				></div>
				<div
					className="colorOption"
					//   onClick={() => dispatch({ type: "DARK" })}
				></div>
				{/* <div
					className="colorOption"
					//   onClick={() => dispatch({ type: "DARK" })}
				></div> */}
			</div>
		</div>
	);
};
export default Sidebar;
