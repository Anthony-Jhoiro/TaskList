interface Environment {
  required?: boolean,
  mapper?: (_v: string) => string
}

const environmentConfiguration: { [key: string]: Environment } = {
  HASURA_URL: {
    required: true,
  },
  HASURA_ADMIN: {
    required: true,
  },
  JWT_SECRET: {
    required: true,
    mapper: (v: string) => v.replaceAll("\\n", "\n")
  },
  GOOGLE_CLIENT_ID: {
    required: true,
  },
  GOOGLE_CLIENT_SECRET: {
    required: true,
  },
}

export const loadEnv = () => {
  const requiredEnvironment = Object.getOwnPropertyNames(environmentConfiguration).reduce<{ [key: string]: string }>((ac, e) => {
    if (typeof window !== 'undefined' && !e.startsWith('NEXT_PUBLIC')) return ac;

    const config = environmentConfiguration[e];
    if (config.required) {
      const env = process.env[e]
      if (!env) {
        throw new Error(`Missing environment variable [${e}]`);
      }
      ac[e] = config.mapper ? config.mapper(env) : env;
    }
    return ac;
  }, {});

  return {
    ...process.env,
    ...requiredEnvironment,
  }
}

const environment = loadEnv();

export function getEnv(envName: string, defaultValue: string) {
  return environment[envName] ?? defaultValue;
}

