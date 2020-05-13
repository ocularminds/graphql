//find ticket bid 3
ticket(id: 3){
    id
    subject
    user{
      id
      name
      email
    }
  }
}
//fetch all
{
  tickets{
    subject
    status{
      slug
    }
    priority{
      slug
    }
    user{
      name
    }
    assigned_to_user{
      name
    }
  }
}