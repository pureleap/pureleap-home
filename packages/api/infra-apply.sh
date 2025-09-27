#!/bin/sh

set -a # automatically export all variables
. "./.env"
set +a

yarn infra apply prod
