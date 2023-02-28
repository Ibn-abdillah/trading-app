import React from 'react'
import { AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import './footer.css'

function Footer() {
  return (
    <div className='footer' id='footer'>
       <div className="content">
         <div className="col-1 col">
            <h4>Support</h4>
            <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Chat</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
         </div>

         <div className="col-2 col">
            <h4>Developers</h4>
            <ul>
                <li><a href="#">Cloud</a></li>
                <li><a href="#">Commerce</a></li>
                <li><a href="#">Links</a></li>
                <li><a href="#">API</a></li>
            </ul>
         </div>

         <div className="col-3 col">
            <h4>Company</h4>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Privacy</a></li>
            </ul>
         </div>

         <div className="col-4 col">
            <h4>Social</h4>
            <ul>
                <li><a href="#"><AiFillFacebook className='icon' /> facebook</a></li>
                <li><a href="#"><AiOutlineTwitter className='icon' /> Twitter</a></li>
                <li><a href="#"><AiFillLinkedin className='icon' /> LinkedIn</a></li>
                <li><a href="#"><AiFillGithub className='icon brown'/> Github</a></li>
            </ul>
         </div>
       </div>
       <div className="copyright">
             <small>&copy; Designed by Ibn-Abdillah</small>
         </div>
    </div>
  )
}

export default Footer