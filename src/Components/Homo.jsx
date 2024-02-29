import React from 'react'
import design from './homo.module.css'
import { Link } from 'react-router-dom'

export default function Homo() {

    return (
        <div>
            <div id={design.nav}>
                <Link to="/">Create-user</Link>
                <Link to="/user">User</Link>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                </div>
            </div>

        </div>
    )
}
