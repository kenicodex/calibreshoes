import React from 'react';
import Delete from './Delete';
import Edit from './Edit';

function Products(props) {
    return (
        <div >
            <h3 style={{ marginLeft: "1%" }} >Your Products</h3>
            <div className="col-lg-2 col-md-4 col-sm-6 bg-light border rounded-top px-0" style={{ marginLeft: "1%" }} >
                <div className="bg-white" style={{ height: "150px" }}>
                </div>
                <div className="position-relative">
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className="d-flex w-100">
                    <Edit id="edit" />
                    <Delete id="delete" />
                </div>
            </div>
        </div>
    );
}

export default Products;