provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile

  default_tags {
    tags = {
      Project   = "thepixardb-walle"
      CreatedAt = formatdate("YYYY-MM-DD", timestamp())
      ManagedBy = "Terraform"
      Owner     = "Mateus Malaquias"
    }
  }
}
