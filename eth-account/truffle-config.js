module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7501,
            network_id: "5701"
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
}