import "./dataTable.scss";
import {
	DataGrid,
	GridToolbar,
	gridPageCountSelector,
	gridPageSelector,
	useGridApiContext,
	useGridSelector,
} from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableSource";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";

// const columns = [
// 	{ field: "id", headerName: "ID", width: 90 },
// 	{
// 		field: "firstName",
// 		headerName: "First name",
// 		width: 150,
// 		editable: true,
// 	},
// 	{
// 		field: "lastName",
// 		headerName: "Last name",
// 		width: 150,
// 		editable: true,
// 	},
// 	{
// 		field: "age",
// 		headerName: "Age",
// 		type: "number",
// 		width: 110,
// 		editable: true,
// 	},
// 	{
// 		field: "fullName",
// 		headerName: "Full name",
// 		description: "This column has a value getter and is not sortable.",
// 		sortable: false,
// 		width: 160,
// 		valueGetter: (params) =>
// 			`${params.row.firstName || ""} ${params.row.lastName || ""}`,
// 	},
// ];

// const rows = [
// 	{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
// 	{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
// 	{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
// 	{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
// 	{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
// 	{ id: 6, lastName: "Melisandre", firstName: null, age: 150 },
// 	{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
// 	{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
// 	{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];
function CustomPagination() {
	const apiRef = useGridApiContext();
	const page = useGridSelector(apiRef, gridPageSelector);
	const pageCount = useGridSelector(apiRef, gridPageCountSelector);

	return (
		<Pagination
			color="primary"
			count={pageCount}
			page={page + 1}
			onChange={(event, value) => apiRef.current.setPage(value - 1)}
		/>
	);
}

const DataTable = () => {
	const [data, setData] = useState(userRows);
	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	// this column will be use by other data
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link
							// to="/users/test"
							to="/users/1"
							style={{ textDecoration: "none" }}
						>
							<div className="viewButton">View</div>
						</Link>
						<div
							className="deleteButton"
							onClick={() => handleDelete(params.row.id)}
						>
							Delete
						</div>
					</div>
				);
			},
		},
	];

	return (
		<div className="datatable">
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pagination
				pageSize={10}
				rowsPerPageOptions={[10]}
				checkboxSelection
				disableSelectionOnClick
				experimentalFeatures={{ newEditingApi: true }}
				components={{
					Toolbar: GridToolbar,
					Pagination: CustomPagination,
				}}
			/>
		</div>
	);
};
export default DataTable;
