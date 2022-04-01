//modelのbinファイルを読み込むための設定。詳細は↓
//https://docs.expo.dev/guides/customizing-metro/
//https://facebook.github.io/metro/docs/configuration/#resolver-options
//https://serveanswer.com/questions/importing-bin-file-in-expo

const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push("bin");

module.exports = defaultConfig;
