import React from "react";
import { useSelector } from 'react-redux'

const isAuthenticated = useSelector(state => state.auth.authenticated);
