export const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<div className='mb-10'>
		<input
			id='search'
			type='text'
			placeholder='Search'
			aria-label='Search Input'
			className='border-solid border border-r-0 border-slate-300 outline-none rounded-full rounded-r-none p-2 md:w-72 '
			value={filterText}
			onChange={onFilter}
		/>
		<button
			type='button'
			onClick={onClear}
			className='py-2 px-6 border rounded-full rounded-l-none bg-cyan-500 text-white font-extrabold'>
			X
		</button>
	</div>
);
