import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Search = () => {
    return (
        <div className=' w-full md:w-auto transition cursor-pointer'>
            <div className='flex flex-row gap-3 items-center justify-between'>
                {/* <div className='text-sm font-semibold text-gray-600 px-6'>Users Inform</div>
                <div className='hidden sm:block text-sm text-gray-600 font-semibold px-6 border-x-[1px] flex-1 text-center'>
                    Any Week
                </div>
                <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                    <div className='hidden sm:block'>Add User</div>
                    <div className='p-2 bg-green-500 rounded-full text-white'>
                        <BiSearch size={18} />
                    </div>
                </div> */}
                <Link to='/' className='text-lg font-semibold text-green-600'>Home</Link>
                <Link to='/adduser' className='text-lg font-semibold text-green-600'>Add User</Link>
                <Link className='text-lg font-semibold text-green-600'>Contact</Link>
            </div>
        </div>
    )
}

export default Search