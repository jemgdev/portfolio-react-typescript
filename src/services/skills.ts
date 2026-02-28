export type SkillCategory = {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Infrastructure',
    skills: [
      'AWS Lambda',
      'AWS EC2',
      'AWS ECS / Fargate',
      'API Gateway',
      'Cognito',
      'DynamoDB',
      'S3',
      'CloudFront',
      'SQS / SNS',
      'EventBridge',
      'Step Functions',
      'CloudFormation',
      'Docker',
      'Terraform',
      'CI/CD',
    ],
  },
  {
    title: 'Backend & Lenguajes',
    skills: [
      'Node.js',
      'NestJS',
      'TypeScript',
      'JavaScript',
      'Express.js',
      'Serverless Framework',
      'Python',
      'gRPC',
      'WebSockets',
      'REST / OpenAPI 3',
    ],
  },
  {
    title: 'Arquitectura & Metodologías',
    skills: [
      'Arquitectura Hexagonal',
      'DDD',
      'CQRS',
      'Microservicios',
      'Event Driven Architecture',
      'Clean Architecture',
      'SOLID',
      'Scrum',
      'Kanban',
      'TDD / BDD',
    ],
  },
  {
    title: 'Bases de Datos & ORMs',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'DynamoDB',
      'Redis',
      'TypeORM',
      'Prisma',
      'Sequelize',
    ],
  },
  {
    title: 'IA & Herramientas',
    skills: [
      'AWS Bedrock',
      'AI Agents',
      'MCP (Model Context Protocol)',
      'SonarQube',
      'Jest',
      'Swagger / OpenAPI',
      'Git',
      'Postman',
    ],
  },
]

export default skillCategories
