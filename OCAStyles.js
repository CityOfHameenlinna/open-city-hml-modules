import {StyleSheet} from 'react-native';


const colors = {

	'orange': '#f77952',
	'white': '#fff',
	'blue': '#1e3250',
	'blueRgba': 'rgba(30, 50, 80, 1)',
	'blueMask': 'rgba(30, 50, 80, 0.8)',
	'blueMaskDark': 'rgba(30, 50, 80, 0.9)',
	'opacityBlue': 'rgba(11,74,125,0.65)',
	'lightGrey': '#f5f5f5',
	'inputGrey': '#d6d6d6',
	'grey': '#ccc'

};



export default StyleSheet.create({
	heading: {
		color: colors.orange,
		fontWeight: 'bold'
	},
	h1: {
		fontSize: 35
	},
	h2: {
		fontSize: 28
	},
	opacityBlue: {
		backgroundColor: colors.blueMask
	},
	opacityBlueDark: {
		backgroundColor: colors.blueMaskDark
	},
	lightGreyBackground: {
		backgroundColor: colors.lightGrey
	},
	whiteText: {
		color: colors.white
	},
	orangeText: {
		color: colors.orange
	},
	padding20_0: {
		padding:0,
		paddingTop: 20,
		paddingBottom: 20
	},
	margin10_0: {
		margin:0,
		marginTop:10,
		marginBottom: 10
	},
	margin20_0: {
		marginTop:20,
		marginBottom: 20
	},
	input: {
		borderWidth: 1,
		borderColor: colors.inputGrey,
		borderRadius: 4
	},
	button: {
		padding:10,
		borderRadius: 50,
	},
	buttonSubmit: {
		backgroundColor: colors.orange
	},
	buttonSubmitBorder: {
		borderWidth: 2,
		borderColor: colors.orange
	},
	buttonMedium: {
		padding: 16
	},
	buttonText: {
		color: colors.white,
		fontWeight: 'bold'
	},
	buttonTextMedium: {
		fontSize:20
	},
	fullWidth: {
		width: '100%',
	},
	textCentered: {
		textAlign: 'center'
	},
	verticalAlign: {
		justifyContent: 'center'
	},
	horizontalAlign: {
		alignItems: 'center'
	},
	bottomPositioned: {
		flex: 1,
		width: '100%',
		alignItems: 'flex-end',
		marginBottom: 0
	},
	width80: {
		width: '80%'
	},
	bold: {
		fontWeight: 'bold'
	},
	widthByContent: {
		alignSelf: 'flex-start'
	},
	backgroundTransparent: {
		backgroundColor: 'transparent'
	},
	roundedButton: {
		borderRadius: 50
	},
    roudedWhiteBox: {
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#fff'
    },
  flatList: {
    flex: 1,
    flexDirection:'column'
  },
  listItem: {
    flex:1,
    margin:0,
    padding:8,
    paddingLeft:16,
    paddingRight:16,
    backgroundColor: '#f5f5f5'
  },
});


/*export {
	style
}*/