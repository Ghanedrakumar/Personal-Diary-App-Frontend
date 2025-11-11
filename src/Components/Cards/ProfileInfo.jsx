import React from "react"
// import { getInitials } from "../Components/utils/helper.js"

import  { getInitials }  from "../../utils/helper.js"
const ProfileInfo = ({ onLogout, userInfo }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials(userInfo?.username)}
      </div>

      <div>
        <p className="text-sm font-medium">{userInfo?.username}</p>
      </div>

      <button
        className="text-sm bg-red-500 p-1 rounded-md text-white hover:opacity-80"
        onClick={onLogout}
      >
        Logout
      </button>
      {getInitials()}

    </div>
  )
}

export default ProfileInfo