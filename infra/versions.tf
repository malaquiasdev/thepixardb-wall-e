terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
  backend "s3" {
    bucket  = "thepixardb-252311082662"
    key     = "terraform/walle.tfstate"
    region  = "us-east-1"
    profile = "default"
  }
}
