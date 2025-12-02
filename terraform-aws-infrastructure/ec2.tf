resource "aws_instance" "example" {
  for_each      = var.instances
  ami           = each.value.ami
  instance_type = each.value.instance_type
  key_name      = var.key_name
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]
  tags = {
    Name = each.key
  }
}
