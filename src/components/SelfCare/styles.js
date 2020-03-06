import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
logo: {
    maxWidth: 100,
    maxHeight: 100
    },
icon: {
    marginRight: theme.spacing(2),
},
textfield: {
    maxWidth: 40,
    maxHeight: 100
},
heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
},
heroButtons: {
    marginTop: theme.spacing(4),
},
cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
},
card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
},
cardMedia: {
    paddingTop: '100%', // full size
},
// cardMediaProfile: {
//     paddingTop: '100%',
//     borderRadius: '50%'
// },
cardContent: {
    flexGrow: 1,
},
footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
},
}));


export default useStyles;