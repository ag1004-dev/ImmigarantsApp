import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from "styled-components";


export const StyledTableCell = withStyles(theme => ({
    head: {
        background: '#007BFF',
        color: theme.palette.common.white,
        fontSize: 16,
        fontWeight: 600,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

