module.exports = {
		"env": {
        "browser": true,
				"node": true,
        "es2020": true
    },
		"root": true,
    "extends": "eslint:recommended",
    "globals": {
        "hljs": "readonly",
        "Gumshoe": "readonly",
        "SimplyDialogs": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": "2020",
        "sourceType": "module"
    },
    "rules": {
        "eqeqeq": "error"
    }
};
