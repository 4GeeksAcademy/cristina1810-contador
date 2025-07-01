import React, { useState, useEffect } from "react";

export default function Button({titulo, onClick}) {

    return (
        <button className="btn btn-light m-3" onClick={onClick}> {titulo}</button>
    );
}

