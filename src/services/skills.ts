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
      'AWS ECS',
      'API Gateway',
      'Cognito',
      'DynamoDB',
      'S3',
      'CloudFront',
      'SQS',
      'SNS',
      'Docker',
      'Terraform',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'NestJS',
      'TypeScript',
      'Express.js',
      'Serverless',
      'Python',
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'DynamoDB',
      'Redis',
      'TypeORM',
      'Prisma',
      'Git',
    ],
  },
]

export default skillCategories
