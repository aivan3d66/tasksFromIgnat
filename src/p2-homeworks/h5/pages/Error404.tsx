import React from 'react'
const s = require('./../HW5.module.css');

function Error404() {
    return (
      <div className={s.error}>
        <div className={s.errorCode}>404</div>
        <div className={s.errorMessage}>Page not found!</div>
        <div className={s.errorImg}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
      </div>
    )
}

export default Error404
