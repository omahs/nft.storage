/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/': {
    get: {
      responses: {
        /** OK */
        200: unknown
      }
    }
  }
  '/auth_key': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.auth_key.id']
          name?: parameters['rowFilter.auth_key.name']
          secret?: parameters['rowFilter.auth_key.secret']
          user_id?: parameters['rowFilter.auth_key.user_id']
          inserted_at?: parameters['rowFilter.auth_key.inserted_at']
          updated_at?: parameters['rowFilter.auth_key.updated_at']
          deleted_at?: parameters['rowFilter.auth_key.deleted_at']
          /** Filtering Columns */
          select?: parameters['select']
          /** Ordering */
          order?: parameters['order']
          /** Limiting and Pagination */
          offset?: parameters['offset']
          /** Limiting and Pagination */
          limit?: parameters['limit']
        }
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range']
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit']
          /** Preference */
          Prefer?: parameters['preferCount']
        }
      }
      responses: {
        /** OK */
        200: {
          schema: definitions['auth_key'][]
        }
        /** Partial Content */
        206: unknown
      }
    }
    post: {
      parameters: {
        body: {
          /** auth_key */
          auth_key?: definitions['auth_key']
        }
        query: {
          /** Filtering Columns */
          select?: parameters['select']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** Created */
        201: unknown
      }
    }
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.auth_key.id']
          name?: parameters['rowFilter.auth_key.name']
          secret?: parameters['rowFilter.auth_key.secret']
          user_id?: parameters['rowFilter.auth_key.user_id']
          inserted_at?: parameters['rowFilter.auth_key.inserted_at']
          updated_at?: parameters['rowFilter.auth_key.updated_at']
          deleted_at?: parameters['rowFilter.auth_key.deleted_at']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.auth_key.id']
          name?: parameters['rowFilter.auth_key.name']
          secret?: parameters['rowFilter.auth_key.secret']
          user_id?: parameters['rowFilter.auth_key.user_id']
          inserted_at?: parameters['rowFilter.auth_key.inserted_at']
          updated_at?: parameters['rowFilter.auth_key.updated_at']
          deleted_at?: parameters['rowFilter.auth_key.deleted_at']
        }
        body: {
          /** auth_key */
          auth_key?: definitions['auth_key']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
  }
  '/content': {
    get: {
      parameters: {
        query: {
          cid?: parameters['rowFilter.content.cid']
          dag_size?: parameters['rowFilter.content.dag_size']
          inserted_at?: parameters['rowFilter.content.inserted_at']
          updated_at?: parameters['rowFilter.content.updated_at']
          /** Filtering Columns */
          select?: parameters['select']
          /** Ordering */
          order?: parameters['order']
          /** Limiting and Pagination */
          offset?: parameters['offset']
          /** Limiting and Pagination */
          limit?: parameters['limit']
        }
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range']
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit']
          /** Preference */
          Prefer?: parameters['preferCount']
        }
      }
      responses: {
        /** OK */
        200: {
          schema: definitions['content'][]
        }
        /** Partial Content */
        206: unknown
      }
    }
    post: {
      parameters: {
        body: {
          /** content */
          content?: definitions['content']
        }
        query: {
          /** Filtering Columns */
          select?: parameters['select']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** Created */
        201: unknown
      }
    }
    delete: {
      parameters: {
        query: {
          cid?: parameters['rowFilter.content.cid']
          dag_size?: parameters['rowFilter.content.dag_size']
          inserted_at?: parameters['rowFilter.content.inserted_at']
          updated_at?: parameters['rowFilter.content.updated_at']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
    patch: {
      parameters: {
        query: {
          cid?: parameters['rowFilter.content.cid']
          dag_size?: parameters['rowFilter.content.dag_size']
          inserted_at?: parameters['rowFilter.content.inserted_at']
          updated_at?: parameters['rowFilter.content.updated_at']
        }
        body: {
          /** content */
          content?: definitions['content']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
  }
  '/metric': {
    get: {
      parameters: {
        query: {
          name?: parameters['rowFilter.metric.name']
          value?: parameters['rowFilter.metric.value']
          inserted_at?: parameters['rowFilter.metric.inserted_at']
          updated_at?: parameters['rowFilter.metric.updated_at']
          /** Filtering Columns */
          select?: parameters['select']
          /** Ordering */
          order?: parameters['order']
          /** Limiting and Pagination */
          offset?: parameters['offset']
          /** Limiting and Pagination */
          limit?: parameters['limit']
        }
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range']
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit']
          /** Preference */
          Prefer?: parameters['preferCount']
        }
      }
      responses: {
        /** OK */
        200: {
          schema: definitions['metric'][]
        }
        /** Partial Content */
        206: unknown
      }
    }
    post: {
      parameters: {
        body: {
          /** metric */
          metric?: definitions['metric']
        }
        query: {
          /** Filtering Columns */
          select?: parameters['select']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** Created */
        201: unknown
      }
    }
    delete: {
      parameters: {
        query: {
          name?: parameters['rowFilter.metric.name']
          value?: parameters['rowFilter.metric.value']
          inserted_at?: parameters['rowFilter.metric.inserted_at']
          updated_at?: parameters['rowFilter.metric.updated_at']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
    patch: {
      parameters: {
        query: {
          name?: parameters['rowFilter.metric.name']
          value?: parameters['rowFilter.metric.value']
          inserted_at?: parameters['rowFilter.metric.inserted_at']
          updated_at?: parameters['rowFilter.metric.updated_at']
        }
        body: {
          /** metric */
          metric?: definitions['metric']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
  }
  '/pin': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.pin.id']
          status?: parameters['rowFilter.pin.status']
          content_cid?: parameters['rowFilter.pin.content_cid']
          service?: parameters['rowFilter.pin.service']
          inserted_at?: parameters['rowFilter.pin.inserted_at']
          updated_at?: parameters['rowFilter.pin.updated_at']
          /** Filtering Columns */
          select?: parameters['select']
          /** Ordering */
          order?: parameters['order']
          /** Limiting and Pagination */
          offset?: parameters['offset']
          /** Limiting and Pagination */
          limit?: parameters['limit']
        }
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range']
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit']
          /** Preference */
          Prefer?: parameters['preferCount']
        }
      }
      responses: {
        /** OK */
        200: {
          schema: definitions['pin'][]
        }
        /** Partial Content */
        206: unknown
      }
    }
    post: {
      parameters: {
        body: {
          /** pin */
          pin?: definitions['pin']
        }
        query: {
          /** Filtering Columns */
          select?: parameters['select']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** Created */
        201: unknown
      }
    }
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.pin.id']
          status?: parameters['rowFilter.pin.status']
          content_cid?: parameters['rowFilter.pin.content_cid']
          service?: parameters['rowFilter.pin.service']
          inserted_at?: parameters['rowFilter.pin.inserted_at']
          updated_at?: parameters['rowFilter.pin.updated_at']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.pin.id']
          status?: parameters['rowFilter.pin.status']
          content_cid?: parameters['rowFilter.pin.content_cid']
          service?: parameters['rowFilter.pin.service']
          inserted_at?: parameters['rowFilter.pin.inserted_at']
          updated_at?: parameters['rowFilter.pin.updated_at']
        }
        body: {
          /** pin */
          pin?: definitions['pin']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
  }
  '/upload': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.upload.id']
          user_id?: parameters['rowFilter.upload.user_id']
          key_id?: parameters['rowFilter.upload.key_id']
          content_cid?: parameters['rowFilter.upload.content_cid']
          source_cid?: parameters['rowFilter.upload.source_cid']
          mime_type?: parameters['rowFilter.upload.mime_type']
          type?: parameters['rowFilter.upload.type']
          name?: parameters['rowFilter.upload.name']
          files?: parameters['rowFilter.upload.files']
          origins?: parameters['rowFilter.upload.origins']
          meta?: parameters['rowFilter.upload.meta']
          inserted_at?: parameters['rowFilter.upload.inserted_at']
          updated_at?: parameters['rowFilter.upload.updated_at']
          deleted_at?: parameters['rowFilter.upload.deleted_at']
          /** Filtering Columns */
          select?: parameters['select']
          /** Ordering */
          order?: parameters['order']
          /** Limiting and Pagination */
          offset?: parameters['offset']
          /** Limiting and Pagination */
          limit?: parameters['limit']
        }
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range']
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit']
          /** Preference */
          Prefer?: parameters['preferCount']
        }
      }
      responses: {
        /** OK */
        200: {
          schema: definitions['upload'][]
        }
        /** Partial Content */
        206: unknown
      }
    }
    post: {
      parameters: {
        body: {
          /** upload */
          upload?: definitions['upload']
        }
        query: {
          /** Filtering Columns */
          select?: parameters['select']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** Created */
        201: unknown
      }
    }
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.upload.id']
          user_id?: parameters['rowFilter.upload.user_id']
          key_id?: parameters['rowFilter.upload.key_id']
          content_cid?: parameters['rowFilter.upload.content_cid']
          source_cid?: parameters['rowFilter.upload.source_cid']
          mime_type?: parameters['rowFilter.upload.mime_type']
          type?: parameters['rowFilter.upload.type']
          name?: parameters['rowFilter.upload.name']
          files?: parameters['rowFilter.upload.files']
          origins?: parameters['rowFilter.upload.origins']
          meta?: parameters['rowFilter.upload.meta']
          inserted_at?: parameters['rowFilter.upload.inserted_at']
          updated_at?: parameters['rowFilter.upload.updated_at']
          deleted_at?: parameters['rowFilter.upload.deleted_at']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.upload.id']
          user_id?: parameters['rowFilter.upload.user_id']
          key_id?: parameters['rowFilter.upload.key_id']
          content_cid?: parameters['rowFilter.upload.content_cid']
          source_cid?: parameters['rowFilter.upload.source_cid']
          mime_type?: parameters['rowFilter.upload.mime_type']
          type?: parameters['rowFilter.upload.type']
          name?: parameters['rowFilter.upload.name']
          files?: parameters['rowFilter.upload.files']
          origins?: parameters['rowFilter.upload.origins']
          meta?: parameters['rowFilter.upload.meta']
          inserted_at?: parameters['rowFilter.upload.inserted_at']
          updated_at?: parameters['rowFilter.upload.updated_at']
          deleted_at?: parameters['rowFilter.upload.deleted_at']
        }
        body: {
          /** upload */
          upload?: definitions['upload']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
  }
  '/user': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.user.id']
          magic_link_id?: parameters['rowFilter.user.magic_link_id']
          github_id?: parameters['rowFilter.user.github_id']
          name?: parameters['rowFilter.user.name']
          picture?: parameters['rowFilter.user.picture']
          email?: parameters['rowFilter.user.email']
          public_address?: parameters['rowFilter.user.public_address']
          github?: parameters['rowFilter.user.github']
          inserted_at?: parameters['rowFilter.user.inserted_at']
          updated_at?: parameters['rowFilter.user.updated_at']
          /** Filtering Columns */
          select?: parameters['select']
          /** Ordering */
          order?: parameters['order']
          /** Limiting and Pagination */
          offset?: parameters['offset']
          /** Limiting and Pagination */
          limit?: parameters['limit']
        }
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range']
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit']
          /** Preference */
          Prefer?: parameters['preferCount']
        }
      }
      responses: {
        /** OK */
        200: {
          schema: definitions['user'][]
        }
        /** Partial Content */
        206: unknown
      }
    }
    post: {
      parameters: {
        body: {
          /** user */
          user?: definitions['user']
        }
        query: {
          /** Filtering Columns */
          select?: parameters['select']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** Created */
        201: unknown
      }
    }
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.user.id']
          magic_link_id?: parameters['rowFilter.user.magic_link_id']
          github_id?: parameters['rowFilter.user.github_id']
          name?: parameters['rowFilter.user.name']
          picture?: parameters['rowFilter.user.picture']
          email?: parameters['rowFilter.user.email']
          public_address?: parameters['rowFilter.user.public_address']
          github?: parameters['rowFilter.user.github']
          inserted_at?: parameters['rowFilter.user.inserted_at']
          updated_at?: parameters['rowFilter.user.updated_at']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.user.id']
          magic_link_id?: parameters['rowFilter.user.magic_link_id']
          github_id?: parameters['rowFilter.user.github_id']
          name?: parameters['rowFilter.user.name']
          picture?: parameters['rowFilter.user.picture']
          email?: parameters['rowFilter.user.email']
          public_address?: parameters['rowFilter.user.public_address']
          github?: parameters['rowFilter.user.github']
          inserted_at?: parameters['rowFilter.user.inserted_at']
          updated_at?: parameters['rowFilter.user.updated_at']
        }
        body: {
          /** user */
          user?: definitions['user']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
  }
  '/rpc/create_upload': {
    post: {
      parameters: {
        body: {
          args: {
            data: string
          }
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferParams']
        }
      }
      responses: {
        /** OK */
        200: unknown
      }
    }
  }
  '/rpc/find_deals_by_content_cids': {
    post: {
      parameters: {
        body: {
          args: {
            cids: string
          }
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferParams']
        }
      }
      responses: {
        /** OK */
        200: unknown
      }
    }
  }
  '/rpc/pgrst_watch': {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown }
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferParams']
        }
      }
      responses: {
        /** OK */
        200: unknown
      }
    }
  }
}

export interface definitions {
  auth_key: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number
    name: string
    secret: string
    /**
     * Note:
     * This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    user_id: number
    inserted_at: string
    updated_at: string
    deleted_at?: string
  }
  content: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    cid: string
    dag_size?: number
    inserted_at: string
    updated_at: string
  }
  metric: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    name: string
    value: number
    inserted_at: string
    updated_at: string
  }
  pin: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number
    status: 'PinError' | 'PinQueued' | 'Pinned' | 'Pinning'
    /**
     * Note:
     * This is a Foreign Key to `content.cid`.<fk table='content' column='cid'/>
     */
    content_cid: string
    service: 'Pinata' | 'IpfsCluster' | 'IpfsCluster2'
    inserted_at: string
    updated_at: string
  }
  upload: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number
    /**
     * Note:
     * This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    user_id: number
    /**
     * Note:
     * This is a Foreign Key to `auth_key.id`.<fk table='auth_key' column='id'/>
     */
    key_id?: number
    /**
     * Note:
     * This is a Foreign Key to `content.cid`.<fk table='content' column='cid'/>
     */
    content_cid: string
    source_cid: string
    mime_type?: string
    type: 'Car' | 'Blob' | 'Multipart' | 'Remote' | 'Nft'
    name?: string
    files?: string
    origins?: string
    meta?: string
    inserted_at: string
    updated_at: string
    deleted_at?: string
  }
  user: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number
    magic_link_id?: string
    github_id: string
    name: string
    picture?: string
    email: string
    public_address?: string
    github?: string
    inserted_at: string
    updated_at: string
  }
}

export interface parameters {
  /** Preference */
  preferParams: 'params=single-object'
  /** Preference */
  preferReturn: 'return=representation' | 'return=minimal' | 'return=none'
  /** Preference */
  preferCount: 'count=none'
  /** Filtering Columns */
  select: string
  /** On Conflict */
  on_conflict: string
  /** Ordering */
  order: string
  /** Limiting and Pagination */
  range: string
  /** Limiting and Pagination */
  rangeUnit: string
  /** Limiting and Pagination */
  offset: string
  /** Limiting and Pagination */
  limit: string
  /** auth_key */
  'body.auth_key': definitions['auth_key']
  'rowFilter.auth_key.id': string
  'rowFilter.auth_key.name': string
  'rowFilter.auth_key.secret': string
  'rowFilter.auth_key.user_id': string
  'rowFilter.auth_key.inserted_at': string
  'rowFilter.auth_key.updated_at': string
  'rowFilter.auth_key.deleted_at': string
  /** content */
  'body.content': definitions['content']
  'rowFilter.content.cid': string
  'rowFilter.content.dag_size': string
  'rowFilter.content.inserted_at': string
  'rowFilter.content.updated_at': string
  /** metric */
  'body.metric': definitions['metric']
  'rowFilter.metric.name': string
  'rowFilter.metric.value': string
  'rowFilter.metric.inserted_at': string
  'rowFilter.metric.updated_at': string
  /** pin */
  'body.pin': definitions['pin']
  'rowFilter.pin.id': string
  'rowFilter.pin.status': string
  'rowFilter.pin.content_cid': string
  'rowFilter.pin.service': string
  'rowFilter.pin.inserted_at': string
  'rowFilter.pin.updated_at': string
  /** upload */
  'body.upload': definitions['upload']
  'rowFilter.upload.id': string
  'rowFilter.upload.user_id': string
  'rowFilter.upload.key_id': string
  'rowFilter.upload.content_cid': string
  'rowFilter.upload.source_cid': string
  'rowFilter.upload.mime_type': string
  'rowFilter.upload.type': string
  'rowFilter.upload.name': string
  'rowFilter.upload.files': string
  'rowFilter.upload.origins': string
  'rowFilter.upload.meta': string
  'rowFilter.upload.inserted_at': string
  'rowFilter.upload.updated_at': string
  'rowFilter.upload.deleted_at': string
  /** user */
  'body.user': definitions['user']
  'rowFilter.user.id': string
  'rowFilter.user.magic_link_id': string
  'rowFilter.user.github_id': string
  'rowFilter.user.name': string
  'rowFilter.user.picture': string
  'rowFilter.user.email': string
  'rowFilter.user.public_address': string
  'rowFilter.user.github': string
  'rowFilter.user.inserted_at': string
  'rowFilter.user.updated_at': string
}

export interface operations {}

export interface external {}
