module "dynamodb_table_movies" {
  source    = "./modules/dynamodb"
  name      = var.dynamo_table_movies_name
  hash_key  = "pk"
  range_key = "sk"
  attributes = [
    {
      name = "pk"
      type = "S"
    },
    {
      name = "sk"
      type = "S"
    }
  ]
}

module "lambda_ingest_database" {
  source           = "./modules/lambda"
  name             = "${var.project_name}-${var.project_name_suffix}-ingest"
  handler_path     = "index.handler"
  description      = "Ingest content in DynamoDB"
  runtime          = "nodejs14.x"
  timeout          = 60
  memory_size      = 1024
  role_arn         = aws_iam_role.this.arn
  log_retention    = 1
  filename         = data.archive_file.this.output_path
  source_code_hash = data.archive_file.this.output_base64sha256
  environment = {
    TABLE_MOVIES = var.dynamo_table_movies_name
  }
}
