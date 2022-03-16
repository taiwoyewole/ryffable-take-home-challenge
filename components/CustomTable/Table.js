import { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { FilterComponent } from '../Filter';

export const CustomTable = ({
	columns,
	data,
	isLoading,
	onSelectedRowsChange,
}) => {
	const [filter, setFilter] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

	const filteredItems = data.filter(
		(item) =>
			item.name && item.name.toLowerCase().includes(filter.toLowerCase())
	);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filter) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilter('');
			}
		};

		return (
			<FilterComponent
				onFilter={(e) => setFilter(e.target.value)}
				onClear={handleClear}
				filterText={filter}
			/>
		);
	}, [filter, resetPaginationToggle]);

	return (
		<DataTable
			responsive
			columns={columns}
			data={filteredItems}
			pagination
			onSelectedRowsChange={onSelectedRowsChange}
			progressPending={isLoading}
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			paginationResetDefaultPage={resetPaginationToggle}
			persistTableHead
			// progressComponent={<Spinner />}
		/>
	);
};
