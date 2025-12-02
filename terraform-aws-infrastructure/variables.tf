variable "region" {
  description = "AWS region where resources will be created"
  type        = string
  default     = "ap-southeast-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}
variable "ami" {
  description = "AMI ID used to launch the EC2 instance"
  type        = string
}

variable "key_name" {
  description = "Name of the SSH key pair"
  type        = string
}
variable "instance_count"{
    type = number
    default = 2
}

variable "instances" {
  description = "Map of EC2 instances with different configurations"
  type = map(object({
    instance_type = string
    ami           = string
  }))
}