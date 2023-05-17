import React, { useState } from 'react'

const Contect = () => {

  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: ''
  });

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My Name is ${data.fullname}.  My Mobile Number ${data.phone} . My Email Id ${data.email}.My Message is ${data.msg}. `)
  }

  const inputVale = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })

  }

  return (
    <>
      <div className='my-5 '>
        <h1 className='text-center'>Contect us</h1>
      </div>
      <div className='container contect-div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">fullname</label>
                <input type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputVale}
                  placeholder='Enter Your Name' />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Phone</label>
                <input type="Number"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="phone"
                  value={data.phone}
                  onChange={inputVale}
                  placeholder='Mobile Number' />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email"
                  name='email'
                  value={data.email}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="emailHelp"
                  onChange={inputVale}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
                <textarea class="form-control" 
                name='msg' 
                value={data.msg} 
                id="exampleFormControlTextarea1" 
                rows="3" 
                onChange={inputVale}></textarea>
              </div>


              <button type="submit" className="btn btn-outline-primary">Submit form</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contect