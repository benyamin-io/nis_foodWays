import React from 'react'

import finger from '../assets/addProduct/finger.png'

export default function AddProduct() {
  return (
    <div className="w-75 mx-auto mt-5">
      <h3 className="mb-4">Add Product</h3>
      <form>
        <div className="d-flex">
            <div className="flex-grow-1">
              <input type="text" placeholder="Title" className="w-100 p-2 mb-4" />
            </div>

            <div className="ml-3">
              <label for="file1" style={{border: "1px solid black", cursor: 'pointer'}} className="d-flex align-items-center py-2 px-4">
                <div className="mr-4">Attach Image</div>
                <img src={finger} />
              </label>
              <input id="file1" type="file" placeholder="Attach File" style={{display: 'none'}}/>
            </div>
        </div>

        <div>
          <input type="number" placeholder="Price" className="w-100 p-2 mb-4" />
        </div>

        <div className="float-right">
          <button className="btn bg-dark text-white px-5 py-1">Save</button>
        </div>
      </form>
    </div>
  )
}

