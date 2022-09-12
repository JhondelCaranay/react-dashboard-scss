import DataTable from "../../component/datatable/DataTable";
import Navbar from "../../component/nabvar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import "./list.scss";

const List = () => {
	return (
		<div className="list">
			<Sidebar />
			<div className="listContainer">
				<Navbar />
				<DataTable />
			</div>
		</div>
	);
};
export default List;
