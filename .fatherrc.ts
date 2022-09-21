let packageName: string;

if (process.env.NODE_ENV_PACKAGENAME) {
  packageName = process.env.NODE_ENV_PACKAGENAME;
  console.log(packageName);
} else {
  throw Error('请选择索要打包的package，例如："pnpm run build-utils"');
}

export default {
  // more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md

  esm: {
    input: `./packages/${packageName}/src`,
    output: `./packages/${packageName}/dist/esm`,
  },
  cjs: {
    input: `./packages/${packageName}/src`,
    output: `./packages/${packageName}/dist/cjs`,
  },
  // esm: {},
};
