# server-based syntax
# ======================
# Defines a single server with a list of roles and multiple properties.
# You can define all roles on a single server, or split them:

# server 'example.com', user: 'deploy', roles: %w{app db web}, my_property: :my_value
# server 'example.com', user: 'deploy', roles: %w{app web}, other_property: :other_value
# server 'db.example.com', user: 'deploy', roles: %w{db}



# role-based syntax
# ==================

# Defines a role with one or multiple servers. The primary server in each
# group is considered to be the first unless any  hosts have the primary
# property set. Specify the username and a domain or IP for the server.
# Don't use `:all`, it's a meta role.

# role :app, %w{deploy@example.com}, my_property: :my_value
# role :web, %w{user1@primary.com user2@additional.com}, other_property: :other_value
# role :db,  %w{deploy@example.com}



# Configuration
# =============
# You can set any configuration variable like in config/deploy.rb
# These variables are then only loaded and set in this stage.
# For available Capistrano configuration variables see the documentation page.
# http://capistranorb.com/documentation/getting-started/configuration/
# Feel free to add new variables to customise your setup.



# Custom SSH Options
# ==================
# You may pass any option but keep in mind that net/ssh understands a
# limited set of options, consult the Net::SSH documentation.
# http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start
#
# Global options
# --------------
#  set :ssh_options, {
#    keys: %w(/home/rlisowski/.ssh/id_rsa),
#    forward_agent: false,
#    auth_methods: %w(password)
#  }
#
# The server-based syntax can be used to override options:
# ------------------------------------
# server 'example.com',
#   user: 'user_name',
#   roles: %w{web app},
#   ssh_options: {
#     user: 'user_name', # overrides user setting above
#     keys: %w(/home/user_name/.ssh/id_rsa),
#     forward_agent: false,
#     auth_methods: %w(publickey password)
#     # password: 'please use keys'
#   }

# 阿里云服务器
# server "120.26.83.134", user: "deploy", roles: %w{app db web axe etl} # 待更换
# server "120.26.137.110", user: "deploy", roles: %w{app db web pudge etl}
# server "120.26.215.26", user: "deploy", roles: %w{app db web chaos_knight etl}
# server "120.26.235.168", user: "deploy", roles: %w{app db web abaddon etl}

# # 以下应用不在均衡负载机器中
# server "120.26.226.237", user: "deploy", roles: %w{app db arc_warden migration etl}

# 腾讯云服务器
server "182.254.154.65", user: "deploy", roles: %w{app db web axe etl} # 待更换
server "115.159.186.208", user: "deploy", roles: %w{app db web pudge etl}
server "123.206.182.158", user: "deploy", roles: %w{app db web chaos_knight etl}
server "115.159.196.107", user: "deploy", roles: %w{app db web abaddon etl}

# 以下应用不在均衡负载机器中
server "115.159.50.137", user: "deploy", roles: %w{app db arc_warden migration etl}
