import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

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

