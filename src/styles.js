const styles = {

    app: {
        container: {
            height: '100vh',
            display: 'flex',
            alignItems: 'center'
        },
        left: {
            width: '50%'
        },
        right: {
            width: '50%'
        }
    },
    weather: {
        textAlign: 'center',
        description: {
            fontSize: '24px',
            fontWeight: 'bold'
        },
        temp: {
            fontSize: '54px'
        },
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 0 0 54px',
        input: {
            margin: '21px 0',
            background: 'none',
            border: 'none',
            borderBottom: '2px solid black',
        },
        button: {
            background: 'none',
            border: '2px solid black',
            padding: '8px',
            margin: '21px 0'
        }
    }
}

export default styles;