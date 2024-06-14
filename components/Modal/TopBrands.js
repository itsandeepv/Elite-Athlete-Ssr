import React, { useEffect, useState } from 'react';
import SectionsHeading from '../Cards/SectionsHeading';
import { baseUrl } from '../../utils/urls';
import { getbrand} from '../../redux/actions/brandActions';
import { useDispatch, useSelector } from 'react-redux';

function TopBrands() {
    const dispatch = useDispatch()
    const [brands, setBrands] = useState([]);
    const { brandData } = useSelector((state) => state)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        dispatch(getbrand(`/api/get-brands?page=${currentPage}`))
        setBrands(brandData?.brandData?.brands);
        // setTotalPages(brandData?.brandData?.last_page);
    }, []); 

//    console.log(brandData , "<<<<brandData");
   

    return (
        <div className="top-brands container-fluid">
            <SectionsHeading title="Top Brands"/>
            <div className="all-brands ">
                {brandData?.brandData?.brands?.map((item, index) => (
                    <div key={index} className="img"> 
                        <a href={`/all-product?type=brand&id=${item?.id}`}>
                            <img src={`${baseUrl}/${item?.logo}`} className='img-fluid' style={{border:"1px solid #ccc",maxWidth:"151px"}} alt={item.name} />
                        </a>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default TopBrands;
