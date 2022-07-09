import { useRef, useState,useEffect } from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{5,23}$/
const PWD_REGEX = 